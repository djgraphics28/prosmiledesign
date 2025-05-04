import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';

interface ViewerProps {
  modelUrl: string;
  backgroundColor?: string;
  lightColor?: string;
}

const Viewer: React.FC<ViewerProps> = ({ modelUrl, backgroundColor = '#fdfdfc', lightColor = '#ffffff' }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = viewerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lights
    const hemiLight = new THREE.HemisphereLight(lightColor, 0x444444, 1.5);
    hemiLight.position.set(0, 1, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(lightColor, 2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // GUI Controls
    const gui = new dat.GUI({ autoPlace: false });
    container.appendChild(gui.domElement);

    // Positioning GUI inside the container
    gui.domElement.style.position = 'absolute';
    gui.domElement.style.top = '5%';
    gui.domElement.style.right = '-2px';
    gui.domElement.style.zIndex = '10';

    // Settings for the GUI
    const settings = {
    backgroundColor,
    lightColor,
    cameraX: 0,
    cameraY: 0,
    cameraZ: 5,
    };

    gui.addColor(settings, 'backgroundColor').name('Background Color').onChange((value) => {
      scene.background = new THREE.Color(value);
    });

    gui.addColor(settings, 'lightColor').name('Light Color').onChange((value) => {
      hemiLight.color.set(value);
      dirLight.color.set(value);
    });

    gui.add(settings, 'cameraX', -20, 20).step(0.1).onChange(() => {
      camera.position.set(settings.cameraX, settings.cameraY, settings.cameraZ);
      camera.lookAt(controls.target);
    });

    gui.add(settings, 'cameraY', -20, 20).step(0.1).onChange(() => {
      camera.position.set(settings.cameraX, settings.cameraY, settings.cameraZ);
      camera.lookAt(controls.target);
    });

    gui.add(settings, 'cameraZ', -20, 50).step(0.1).onChange(() => {
      camera.position.set(settings.cameraX, settings.cameraY, settings.cameraZ);
      camera.lookAt(controls.target);
    });

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        model.position.set(0, -1, 0);
        scene.add(model);

        const bbox = new THREE.Box3().setFromObject(model);
        const size = bbox.getSize(new THREE.Vector3());
        const center = bbox.getCenter(new THREE.Vector3());

        const maxDimension = Math.max(size.x, size.y, size.z);
        const distance = maxDimension / (2 * Math.tan(Math.PI * camera.fov / 360)) * 1.3;

        camera.position.set(center.x, center.y, center.z + distance);
        settings.cameraX = camera.position.x;
        settings.cameraY = camera.position.y;
        settings.cameraZ = camera.position.z;

        camera.lookAt(center);
        controls.target.copy(center);
        controls.update();
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      gui.destroy();
      container.removeChild(renderer.domElement);
    };
  }, [modelUrl, backgroundColor, lightColor]);

  return (
    <div className="w-[100%] h-[100%] bg-[#FDFDFC] dark:bg-[#0a0a0a]">
      <div
        ref={viewerRef}
        className="w-auto h-full"
      />
      <div className="absolute top-4 left-4 bg-white/90 text-sm text-gray-700 px-3 py-2 rounded shadow-md z-50 pointer-events-none">
        💡 Drag to rotate, scroll to zoom
      </div>
    </div>
  );
};

export default Viewer;
