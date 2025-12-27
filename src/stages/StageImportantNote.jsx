import React from 'react';
import { Stars, Heart } from 'lucide-react';

const StageImportantNote = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <Stars className="w-6 h-6 text-yellow-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    Important Notes
                </h2>
                <Stars className="w-6 h-6 text-yellow-300" />
            </div>

            <div className="bg-gradient-to-br from-white/15 to-white/5 p-6 rounded-2xl border border-white/25 backdrop-blur-lg max-w-md md:max-w-2xl w-full shadow-xl">
                <div className="space-y-4 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 pr-2 touch-auto">
                    <p className="text-lg text-white/95 font-medium leading-relaxed text-justify">
                        Setelah halaman ini kamu harus siap untuk membuat pilihan, whatever you choose i will always support it, intinya aku bakal nerima pilihan apapun yang kamu pilih
                    </p>
                    <p className="text-lg text-white/95 font-medium leading-relaxed text-justify">
                        Just choose what your heart want
                    </p>
                    <p className="text-lg text-white/95 font-medium leading-relaxed text-justify">
                        Oh yah aku ga akan bales chat mu kalo kamu belum make the choice. Jadi pastiin ketika kamu udah nentuin pilihan kamu, just chat me okay?
                    </p>
                    <p className="text-lg text-white/95 font-medium leading-relaxed text-justify">
                        One last thing, kamu ga perlu langsung ngasih aku jawaban pada hari ini, i'll wait as long as you need to answer.
                    </p>
                    <p className="text-base text-white/80 font-light leading-relaxed text-justify">
                        (btw jangan lupa chat ya kalo kamu udah buat choice nya, disini gaada fitur yang ngirim hasil pilihan kamu ke aku olehnya😭)
                    </p>
                </div>
            </div>

            <button
                onClick={onNext}
                className="mt-4 px-10 py-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600 hover:to-pink-600 rounded-full text-white font-semibold transition-all backdrop-blur-sm border border-white/30 hover:scale-105 flex items-center gap-2 shadow-lg"
            >
                Ready? <Heart size={18} className="fill-current" />
            </button>
        </div>
    );
};

export default StageImportantNote;
