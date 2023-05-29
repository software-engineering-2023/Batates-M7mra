"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [remainingTimes, setRemainingTimes] = useState<string[]>([]);

  useEffect(() => {

    const currentDate = new Date();
    const updatedRemainingTimes: string[] = Array.from(document.querySelectorAll('.date-span')).map((dateSpan) => {
      const dateString = dateSpan.textContent;

      if (dateString) {
        const [day, month, year] = dateString.split('/');
        const targetDate = new Date(Number(year), Number(month) - 1, Number(day));
        const remainingTime = targetDate.getTime() - currentDate.getTime();
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      }

      return '';
    });

    setRemainingTimes(updatedRemainingTimes);


  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >
        <h1>Reminders</h1>
      </div>

      <table className="table table-striped table-hover table-dark table-responsive">
        <thead>
          <tr>
            <th scope="col" className="fs-3">#</th>
            <th scope="col" className="fs-3">Due Date</th>
            <th scope="col" className="fs-3">Amount</th>
            <th scope="col" className="fs-3">Type</th>
            <th scope="col" className="fs-3">remaining time </th>
          </tr>
        </thead>
        <tbody>
          {/* {transactions.map((transaction, i) => (
          <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{transaction.date.toDateString()}</td>
            <td>
            <span className={clsx("badge rounded-pill", transaction.amount > 0 && "text-bg-success", transaction.amount < 0 && "text-bg-danger")}>{transaction.amount > 0 && '+'} {transaction.amount}</span>
            </td>
            <td>{transaction.amount > 0 ? 'Incoming' : faker.helpers.arrayElement(['Bill', 'Outgoing'])}</td>
            <td>{transaction.recipientSender}</td>
          </tr>
        ))} */}
          <tr>
            <th scope="row">1</th>
            <td> <span className="date-span">3/1/2024</span></td>
            <td><span className="badge rounded-pill"> $1750</span></td>
            <td>Gas Bill</td>
            <td><div className="remainingTime">{remainingTimes[0]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>

          </tr>
          <tr>
            <th scope="row">2</th>
            <td><span className="date-span">25/6/2023</span></td>
            <td><span className="badge rounded-pill"> $3000</span></td>
            <td>Water Bill</td>
            <td><div className="remainingTime">{remainingTimes[1]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>  <span className="date-span">14/7/2023</span>  </td>
            <td><span className="badge rounded-pill"> $1500</span></td>
            <td>Electricity Bill</td>
            <td><div className="remainingTime">{remainingTimes[2]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td> <span className="date-span">  23/8/2023</span></td>
            <td><span className="badge rounded-pill"> $4000</span></td>
            <td>CreditCard Bill</td>
            <td><div className="remainingTime">{remainingTimes[3]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td> <span className="date-span">21/3/2024</span></td>
            <td><span className="badge rounded-pill"> $3300</span></td>
            <td>Loan1 Payment</td>
            <td><div className="remainingTime">{remainingTimes[4]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td> <span className="date-span">1/8/2023</span></td>
            <td><span className="badge rounded-pill"> $500</span></td>
            <td>Loan2 Payment</td>
            <td><div className="remainingTime">{remainingTimes[5]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td> <span className="date-span">24/6/2023</span> </td>
            <td><span className="badge rounded-pill"> $1973</span></td>
            <td>Mobile Bill</td>
            <td><div className="remainingTime">{remainingTimes[6]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td> <span className="date-span">30/5/2023</span> </td>
            <td><span className="badge rounded-pill"> $300</span></td>
            <td>Bill</td>
            <td><div className="remainingTime">{remainingTimes[7]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>  <span className="date-span">26/8/2023</span>  </td>
            <td><span className="badge rounded-pill ">$2600</span></td>
            <td>Bill</td>
            <td><div className="remainingTime">{remainingTimes[8]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>  <span className="date-span">30/6/2023</span> </td>
            <td><span className="badge rounded-pill"> $50</span></td>
            <td>Bill</td>
            <td><div className="remainingTime">{remainingTimes[9]}</div></td>
            <td> <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link></td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}
