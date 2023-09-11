import Image from "next/image";
import gambar5 from "../app/icon/ic-graphic.svg";
import gambar4 from "../app/icon/ic-health.svg";
import gambar1 from "../app/icon/ic-marketing.svg";
import gambar3 from "../app/icon/ic-webdev.svg";
import gambar2 from "../app/icon/ic-writter.svg";

export default function Home() {
  return (
    // Kategori Kursus

    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mt-8 container mx-auto">
        <div className="text-center">
          <span className="text-black text-3xl font-bold">Kategori Kursus</span>
        </div>
        <div className="text-center">
          <span className="text-black">
            Lihat selengkapnya dan pilih sesuai minatmu
          </span>
        </div>
        <div className="mt-4 grid grid-cols-1 p-4 md:grid-cols-5 gap-5">
          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-3 mt-7">
              <Image
                src={gambar1}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Digital Marketing
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-2">
              <Image
                src={gambar2}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Content Writter
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-3 mt-12">
              <Image
                src={gambar3}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Web Development
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-2 mt-3">
              <Image
                src={gambar4}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Self Development
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-3 mt-5">
              <Image
                src={gambar5}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Graphic Design
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-3 mt-7">
              <Image
                src={gambar1}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Digital Marketing
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-2">
              <Image
                src={gambar2}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Content Writter
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-3 mt-12">
              <Image
                src={gambar3}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Web Development
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-2 mt-3">
              <Image
                src={gambar4}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Self Development
            </span>
          </div>

          <div className="drop-shadow shadow-xl border p-4 rounded-2xl">
            <div className="flex justify-center mb-3 mt-5">
              <Image
                src={gambar5}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-black text-center font-bold flex justify-center">
              Graphic Design
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-5 container mx-auto flex justify-center">
        <a
          href="#"
          className=" text-center border-2 border-blue-400 text-black rounded-2xl px-12 py-2 inline-block font-regular hover:bg-blue-600 hover:text-white"
        >
          Lihat Semua Kategori
        </a>
      </div>
    </div>
  );
}
