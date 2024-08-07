import { Categories, Container, Filters, SortPopup } from "@/components/shared";

import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/topbar";

export default function Home() {
  return (
    <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
     
    </Container>
    <TopBar />
    <Container className="mt-10 pb-14">
      <div className="flex gap-[80px]">
        <div className="w-[250px]">
          <Filters />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16"> 
            <ProductsGroupList title={"Пиццы"} items={[
              {
                id: 1,
                name: 'Пицца Береке Ет',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                price: 3200,
                items: [{ price: 3200 }],
              },
              {
                id: 2,
                name: 'Вау! Кебаб',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF01FEE6DD7261A9C36187149758D0.avif',
                price: 3200,
                items: [{ price: 3200 }],
              },
              {
                id: 3,
                name: 'Пицца Береке Ет',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                price: 3200,
                items: [{ price: 3200 }],
              },
              {
                id: 4,
                name: 'Пицца Береке Ет',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                price: 3200,
                items: [{ price: 3200 }],
              },
              {
                id: 5,
                name: 'Пицца Береке Ет',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                price: 3200,
                items: [{ price: 3400 }],
              },
              
            ]} categoryId={1} />
            <ProductsGroupList title={"Комбо"} items={[
              {
                id: 6,
                name: 'Пицца Береке Ет',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                price: 3200,
                items: [{ price: 3200 }],
              },
              {
                id: 7,
                name: 'Вау! Кебаб',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF01FEE6DD7261A9C36187149758D0.avif',
                price: 3200,
                items: [{ price: 3200 }],
              },
              {
                id: 8,
                name: 'Пицца Береке Ет',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                price: 3200,
                items: [{ price: 3200 }],
              },
              {
                id: 9,
                name: 'Пицца Береке Ет',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                price: 3200,
                items: [{ price: 3200 }],
              },
              {
                id: 10,
                name: 'Пицца Береке Ет',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                price: 3200,
                items: [{ price: 3400 }],
              },
              
            ]} categoryId={2} />
          </div>
        </div>
      </div>
    </Container>
    <div className="h-[3000px]">

    </div>
    </>
  );
}
