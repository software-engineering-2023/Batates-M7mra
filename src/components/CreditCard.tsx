type CreditCardProps = {
  name: string;
  number: string;
  endYear: number;
  endMonth: number;
  variant?: "primary" | "secondary";
};

export const CreditCard = ({
  name,
  number,
  endYear,
  endMonth,
}: CreditCardProps) => (
  <div className="card credit-card">
    <div className="card-body d-flex flex-column justify-content-end">
      <div
        className="fs-2 py-4"
        style={{
          letterSpacing: 3,
        }}
      >
        {number}
      </div>
      <div className="fs-5 py-2">{name}</div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-6">
          {endMonth} / {endYear}
        </div>
        <img src="/mastercard.png" height={55} width={73} />
      </div>
    </div>
  </div>
);
