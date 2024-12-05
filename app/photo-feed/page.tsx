import {PHOTOS} from "@/constants";
import Image from "next/image";
import Link from "next/link";

const PhotoFeedPage = () => {
    return (
        <section className={"w-screen h-screen flex flex-col items-center justify-center"}>
            <h2 className={"mb-4 text-2xl font-bold"}>Photo Feed of Kyoto</h2>
            <div className="px-20 grid grid-cols-4 gap-4">
                {
                    PHOTOS.map(item =>
                        <Link href={`/photo-feed/${item.id}`} key={item.id}>
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={500}
                                height={500}
                                className={"w-full h-full"}
                            />
                        </Link>
                    )
                }
            </div>
        </section>
    );
};

export default PhotoFeedPage;