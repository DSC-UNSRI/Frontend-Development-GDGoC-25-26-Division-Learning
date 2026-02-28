import Card from "./components/Card";
import MainSection from "./components/MainSection";
import products from "./data/product";

function App() {
  return (
    <MainSection>
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          isAvailable={product.isAvailable}
        />
      ))}
    </MainSection>
  );
}

export default App;
