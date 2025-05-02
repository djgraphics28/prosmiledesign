declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import * as THREE from 'three';
    export class GLTFLoader extends THREE.Loader {
      load(
        url: string,
        onLoad: (gltf: any) => void,
        onProgress?: (event: ProgressEvent<EventTarget>) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }
  
  declare module 'three/examples/jsm/controls/OrbitControls' {
    import * as THREE from 'three';
    export class OrbitControls extends THREE.EventDispatcher {
      constructor(object: THREE.Camera, domElement: HTMLElement);
      enableDamping: boolean;
      dampingFactor: number;
      screenSpacePanning: boolean;
      minDistance: number;
      maxDistance: number;
      maxPolarAngle: number;
      update(): void;
    }
  }
  