import { useState } from 'react';
import CanvasList from '../components/TailwindCss/CanvasList';
import SearchBar from '../components/TailwindCss/SearchBar';
import ViewToggle from '../components/TailwindCss/ViewToggle';
import { useEffect } from 'react';
import { getCanvases } from '../api/canvas';
import Loading from '../components/TailwindCss/Loading';
import Error from '../components/TailwindCss/Error';
import { createCanvas } from '../api/canvas';
import Button from '../components/TailwindCss/Button';
import { deleteCanvas } from '../api/canvas';

function Home() {
  const [searchText, setSearchText] = useState();
  const [isGridView, setIsGridView] = useState(true);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(params) {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getCanvases(params);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData({ title_like: searchText });
  }, [searchText]);

  const handleDeleteItem = async id => {
    if (confirm('삭세하시겠습니까 ?') === false) {
      return;
    }
    try {
      await deleteCanvas(id);
      fetchData({ title_like: searchText }); //전체 리스트 로딩
    } catch (err) {
      alert(err.message);
    }
  };

  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const handleCreateCanvas = async () => {
    try {
      setIsLoadingCreate(true);
      console.log('등록 버튼 클릭');
      await createCanvas(); //등록
      fetchData({ title_like: searchText }); //전체 리스트 로딩
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoadingCreate(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <div className="flex justify-end mb-6">
        <Button onClick={handleCreateCanvas} loading={isLoadingCreate}>
          등록하기
        </Button>
      </div>
      {isLoading && <Loading />}
      {error && (
        <Error
          message={error.message}
          onRetry={() => fetchData({ title_like: searchText })}
        />
      )}
      {!isLoading && !error && (
        <CanvasList
          filteredData={data}
          isGridView={isGridView}
          searchText={searchText}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </div>
  );
}

export default Home;
