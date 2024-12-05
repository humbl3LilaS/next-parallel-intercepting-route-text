import {PHOTOS} from "@/constants";
import Image from "next/image"
import {notFound} from "next/navigation";

const PhotoPage = async ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = await params;
    const photo = PHOTOS.find(item => item.id === id)
    if (!photo) {
        notFound()
    }
    return (
        <section>
            <div className="container mx-auto my-10">
                <div className="w-1/2 mx-auto">
                    <Image
                        alt={photo.title}
                        src={photo.src}
                        width={800}
                        height={800}
                        className="w-full max-h-[800px] object-cover aspect-square rounded-lg"
                    />

                    <div className="bg-white py-4">
                        <h3 className={"mb-2 text-lg font-bold"}>{photo.title}</h3>
                        <p className={"text-black/40"}>{photo.info}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoPage;