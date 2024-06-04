
import { categoryTag } from "../../lib/category";
import { IData } from "../../lib/interface";
interface ICardsProps {
  data: IData[];
  categoryActive: string;
}
export default function Cards({ data, categoryActive }: ICardsProps) {
  if (!data) return null;
  
  let filteredData: IData[] = [];

  if (categoryActive === "Все темы") {
    filteredData = data;
  } else {
    const tags = categoryTag[categoryActive] || [];
    filteredData = data.filter((item) =>
      tags.some((tag) => item.tags.includes(tag))
    );
  }

  return (
    <>
      {filteredData.map((card) => (
        <div key={card.id} className="cards__item">
          <div className="cards__img" style={{ backgroundColor: card.bgColor }}>
            <img
              className="cards__img-content"
              src={card.image}
              alt={card.name}
            />
          </div>
          <p className="cards__title">{card.name}</p>
        </div>
      ))}
    </>
  );
}
