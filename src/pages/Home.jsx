import { useState } from 'react';
import { FaSearch, FaList, FaTh } from 'react-icons/fa';
import CanvasList from '../components/TailwindCss/CanvasList';

function Home() {
  const [searchtext, setSearchText] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const dummyData = [
    {
      id: 1,
      title: '친환경 도시 농업 플랫폼',
      lastModified: '2023-06-15',
      category: '농업',
    },
    {
      id: 2,
      title: 'AI 기반 건강 관리 앱',
      lastModified: '2023-06-10',
      category: '헬스케어',
    },
    {
      id: 3,
      title: '온디맨드 물류 서비스',
      lastModified: '2023-06-05',
      category: '물류',
    },
    {
      id: 4,
      title: 'VR 가상 여행 서비스',
      lastModified: '2023-06-01',
      category: '여행',
    },
  ];
  const filterdData = dummyData.filter(item =>
    item.title.toLowerCase().includes(searchtext.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="검색"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="검색"
            value={searchtext}
            onChange={e => setSearchText(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            aria-label="Grid view"
            onClick={() => setIsGridView(true)}
          >
            <FaTh />
          </button>
          <button
            className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
              ${!isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            aria-label="List view"
            onClick={() => setIsGridView(false)}
          >
            <FaList />
          </button>
        </div>
      </div>
      <CanvasList
        filterdData={filterdData}
        searchtext={searchtext}
        isGridView={isGridView}
      />
    </div>
  );
}

export default Home;
