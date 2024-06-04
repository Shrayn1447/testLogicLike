import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { IData } from "../../lib/interface";
import "./CardsSection.css";

export default function CardSection({
  categoryActive,
}: {
  categoryActive: string;
}) {
  const [data, setData] = useState<IData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://logiclike.com/docs/courses.json"
        );
        setData(response.data);
      } catch (error) {
        setErrorMsg("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  return (
    <section className="section">
      <div className="cards">
        <Cards data={data || []} categoryActive={categoryActive} />
      </div>
    </section>
  );
}
