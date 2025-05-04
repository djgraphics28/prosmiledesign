import { FC } from "react";

interface Product {
  id: number;
  name: string;
  shade: string;
  material: string;
  units: number;
  price: number;
}

interface CaseProductsTabProps {
  productList: Product[];
}

const CaseProductsTab: FC<CaseProductsTabProps> = ({ productList }) => {
  const totalPrice = productList.reduce((total, product) => total + product.price * product.units, 0);

  return (
    <div className="mt-2 p-3">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Product</th>
            <th className="text-left p-2">Shade</th>
            <th className="text-left p-2">Material</th>
            <th className="text-right p-2">Units</th>
            <th className="text-right p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.shade}</td>
              <td className="p-2">{product.material}</td>
              <td className="text-right p-2">{product.units}</td>
              <td className="text-right p-2">${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="text-right p-2 font-bold">Total:</td>
            <td className="text-right p-2 font-bold">${totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CaseProductsTab;
