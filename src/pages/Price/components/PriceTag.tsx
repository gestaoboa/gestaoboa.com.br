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

    return yearlySavings.toFixed(0);
  };

  const savings = calculateSavings();

  return (
    <div className="price-container">
      {savings && (
        <div className="savings-badge">Economize R${savings}/ano</div>
      )}

      <div className="price-tag-header">
        <span className="investment-label">Investimento diário de apenas</span>
      </div>

      {/* Preço diário em destaque */}
      <div className="daily-price">
        R$ {dailyPrice.toFixed(2).replace(".", ",")}
        <span>/dia</span>
      </div>

      {/* Preço mensal em tamanho menor */}
      <div className="monthly-price">
        {showDiscount && originalPrice && (
          <span className="original-price">De R$ {originalPrice}/mês por</span>
        )}
        R$ {monthlyPrice}/mês
      </div>
    </div>
  );
};

export default PriceTag;
