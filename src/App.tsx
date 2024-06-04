import { useState } from "react";
import CategoryNavigator from "./components/CategoryNavigator/CategoryNavigator";
import CardSection from "./components/CardsSection/CardSection";
import "./styles.css";

export default function App() {
  const [categoryActive, setCategoryActive] = useState<string>("Все темы");

  return (
    <main className="main">
      <CategoryNavigator
        categoryActive={categoryActive}
        setCategoryActive={setCategoryActive}
      />
      <CardSection categoryActive={categoryActive} />
    </main>
  );
}
