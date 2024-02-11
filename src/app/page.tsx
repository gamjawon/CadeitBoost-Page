import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <>
      <div className="navbar bg-black text-white p-8 flex justify-between">
      <a href="#">
          <Image src={'/Image/home.png'} alt="Home" width={24} height={24} />
        </a>
        <div className="flex space-x-20"> {/* 상단 버튼의 간격 조절 */}
          <a href="#" className="font-bold text-lg">Codeit Boost</a> {/* # -> 링크 넣으면 됩니다 */}
          <a href="#" className="font-bold text-lg">Part</a>
          <a href="#" className="font-bold text-lg">Curriculum</a>
          <a href="#" className="font-bold text-lg">QnA</a>
          <a href="#" className="font-bold text-lg">Apply</a>
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
        <div className="text-center">
          <p className="text-3xl font-bold">whatever you want.</p> {/* 앞으로 메인화면이 될 코드 */}
        </div>
      </main>
    </>
  );
};

export default Home;