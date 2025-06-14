import React from "react";

interface PriceTagProps {
  dailyPrice: number;
  monthlyPrice: string;
  originalPrice?: string;
  showDiscount: boolean;
  planType?: "Anual" | "Semestral" | "Mensal";
}

const PriceTag: React.FC<PriceTagProps> = ({
  dailyPrice,
  monthlyPrice,
  originalPrice,
  showDiscount,
  planType = "Mensal",
}) => {
  // Calcular economia anual se aplicável
  const calculateSavings = () => {
    if (!originalPrice || planType !== "Anual") return null;

    const originalPriceNum = parseFloat(originalPrice.replace(",", "."));
    const currentPriceNum = parseFloat(monthlyPrice.replace(",", "."));
    const monthlySavings = originalPriceNum - currentPriceNum;
    const yearlySavings = monthlySavings * 12;

    // Exemplo para verificação:
    // Se o plano original é R$ 69,90 e com desconto fica R$ 53,75
    // Economia mensal: R$ 16,15
    // Economia anual: R$ 193,80

    return yearlySavings.toFixed(0);
  };

  const savings = calculateSavings();

  return (
    <div className="price-container">
      {savings && (
        <div className="savings-badge">Economize R${savings}/ano</div>
      )}
      {/* Preço mensal em destaque */}
      <div className="monthly-price-large">
        {showDiscount && originalPrice && (
          <span className="original-price">De R$ {originalPrice}/mês por </span>
        )}
        R$ {monthlyPrice}
        <span>/mês</span>
      </div>
      {/* Preço diário em tamanho menor */}
      <div className="daily-price-small">
        (equivalente a R$ {dailyPrice.toFixed(2).replace(".", ",")} por dia)
      </div>
    </div>
  );
};

export default PriceTag;
