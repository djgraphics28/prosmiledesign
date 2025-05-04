import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Viewer  from "@/components/general/3d-viewer";

type File = {
    name: string;
    type: string;
    src: string;
};

type Props = {
  mediaFiles: File[]
  getThumbnail: (file: File) => string
}

const CaseFilesTab = ({ mediaFiles, getThumbnail }: Props) => {
  return (
    <div className="mt-2 p-3 space-y-2">
      <div className="p-6 pl-0 pt-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {mediaFiles.map((file, idx) => (
            <div key={idx} className="bg-card text-card-foreground flex flex-col rounded-xl pb-4 shadow-sm">
              <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden rounded">
                <img src={getThumbnail(file)} alt={file.name} className="object-cover w-full h-full" />
              </div>
              <div className="text-sm text-gray-800 dark:text-white px-3 py-3 pb-0">{file.name}</div>
              <Button className="mt-3 text-[12px] px-1 py-1">Download</Button>
              {file.name.toLowerCase().endsWith(".glb") && (
                <Dialog>
                  <DialogTrigger><Button className="mt-3 text-[12px]">3D view</Button></DialogTrigger>
                  <DialogContent className="w-[90%] h-[95%] sm:max-w-full flex flex-col">
                      <Viewer modelUrl="/models/human_teeth.glb" backgroundColor="#ffffff" lightColor="#ffffff" />
                  </DialogContent>
                </Dialog>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseFilesTab
