import CanvasItem from './CanvasItem';

function CanvasList({ filterdData, searchtext, isGridView, onDeleteItem }) {
  if (filterdData.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-600">
          {searchtext ? '검색 결과가 없습니다' : '목록이 없습니다'}
        </p>
      </div>
    );
  } else {
    return (
      <div
        className={`grid gap-6 ${
          isGridView ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
        }`}
      >
        {filterdData.map(item => (
          <CanvasItem
            key={item.id}
            id={item.id}
            title={item.title}
            lastModified={item.lastModified}
            category={item.category}
            onDelete={e => {
              e.preventDefault();
              onDeleteItem(item.id);
            }}
          />
        ))}
      </div>
    );
  }
}

export default CanvasList;
