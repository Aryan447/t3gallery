import Link from "next/link";

const mockUrls = [
    "https://f7lvqpw7xw.ufs.sh/f/bBG32ZvcGwvMDKccNtawRl0KHojY4V3cqLOE6QFSmeUbwI5n",
    "https://f7lvqpw7xw.ufs.sh/f/bBG32ZvcGwvMC4xeBu6QdphFzOmkerVb4RCyZwnAx1ulGq27",
    "https://f7lvqpw7xw.ufs.sh/f/bBG32ZvcGwvMZRByUOMczopjxlAbENhtHnOfrI5uWkCdG0w7",
    "https://f7lvqpw7xw.ufs.sh/f/bBG32ZvcGwvMNAwptUOHOxyePFouaWb4L6sTld5K19GmIENz",
    "https://f7lvqpw7xw.ufs.sh/f/bBG32ZvcGwvMjVLiCRQSqWcxCmzw4ir17AfaGD9UInb3NL8M",
    "https://f7lvqpw7xw.ufs.sh/f/bBG32ZvcGwvMbclJz2DvcGwvM75YKE3fmIAeaRXlVBsnSHTL",
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default function HomePage() {
    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {[...mockImages, ...mockImages, ...mockImages].map((image) => (
                    <div key={image.id} className="w-48">
                        <img src={image.url} />
                    </div>
                ))}
            </div>
        </main>
    );
}
