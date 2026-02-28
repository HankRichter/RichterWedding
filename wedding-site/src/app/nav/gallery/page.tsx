import fs from "fs";
import path from "path";
import Image from "next/image";

async function getGalleryPhotos() {
  const galleryDir = path.join(process.cwd(), "public/photos/gallery");
  const files = fs.readdirSync(galleryDir);
  return files.filter((file) =>
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  );
}

export default async function Gallery() {
  const photos = await getGalleryPhotos();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8 text-center">
        Photo Gallery
      </h1>

      {photos.length === 0 ? (
        <div className="bg-secondary p-8 rounded-lg shadow-md text-center">
          <p className="text-primary/60">Photos coming soon...</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div key={photo} className="break-inside-avoid">
              <Image
                src={`/photos/gallery/${photo}`}
                alt={photo.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")}
                width={800}
                height={600}
                className="w-full rounded-lg shadow-md object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}