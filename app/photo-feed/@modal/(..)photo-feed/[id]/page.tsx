import {PHOTOS} from "@/constants";
import {notFound} from "next/navigation";
import Modal from "@/components/model";
import Image from "next/image";

const InterceptingPhotoPage = async ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = await params;
    const photo = PHOTOS.find(item => item.id === id);
    if (!photo) {
        return notFound();
    }
    return (
        <Modal>
            <div>
                <Image
                    alt={photo.title}
                    src={photo.src}
                    width={800}
                    height={800}
                    className="w-full max-h-[800px] object-cover aspect-square rounded-lg"
                />

                <div className="bg-white py-4 px-10 rounded-b-lg">
                    <h3 className={"mb-2 text-lg font-bold"}>{photo.title}</h3>
                    <p className={"text-black/40"}>{photo.info}</p>
                </div>
            </div>
        </Modal>
    );
};

export default InterceptingPhotoPage;