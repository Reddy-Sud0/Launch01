import Image from 'next/image';

const SeeSection = () => {
  return (
    <section className="relative bg-[linear-gradient(#181b01d1,#d0ed01ab,#1d1e21),url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/672e33d96ef8a31a9829af36_top_bg.svg')] bg-[position:0_0,50%_80px] bg-[repeat:no-repeat,no-repeat] bg-[size:auto,auto] pb-20 sm:pb-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="pt-0">
          <div className="flex flex-col gap-8 sm:gap-[72px]">
            {/* Video Section */}
            <div className="relative w-full aspect-video backdrop-blur-[7px] bg-[#1f1a1fe3] rounded-xl sm:rounded-2xl flex justify-center items-center overflow-hidden shadow-[0_32px_48px_-24px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06),0_0_0_1px_rgba(53,63,74,0.88)]">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1067409546?h=8fd6c043db&badge=0&autopause=0&player_id=0&app_id=58479"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Portal VSL Final"
                />
              </div>
            </div>

            {/* Logo Section */}
            <div className="w-full">
              <div className="text-center mb-4 text-sm sm:text-base">Trusted by top-tier service businesses</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 justify-items-center items-center">
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0b563f7f638639c63f_humi.png" alt="Humi" width={120} height={40} className="h-auto w-auto max-w-[100px] sm:max-w-[120px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0c3efd43518c914355_hornbeam.svg" alt="Hornbeam" width={103} height={40} className="h-auto w-auto max-w-[90px] sm:max-w-[103px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364d22bf0c013646afb00a_grantmatch.png" alt="Grantmatch" width={122} height={40} className="h-auto w-auto max-w-[100px] sm:max-w-[122px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0baf4771093543d629_lendly.svg" alt="Lendly" width={71} height={40} className="h-auto w-auto max-w-[60px] sm:max-w-[71px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0c7a4cee75533dbc5e_affinity.png" alt="Affinity" width={96} height={40} className="h-auto w-auto max-w-[80px] sm:max-w-[96px]" />
                <Image src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67364c0b51591846935335a5_launchpop.png" alt="Launchpop" width={130} height={40} className="h-auto w-auto max-w-[110px] sm:max-w-[130px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeSection; 