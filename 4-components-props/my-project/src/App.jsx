import products from "./data/products";
import MainSection from "./components/MainSection";
import Card from "./components/Card";
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
