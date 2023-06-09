"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "2022",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const transData = {
  labels,
  datasets: [
    {
      label: "Account Balance",
      data: labels.map(() => faker.datatype.number({ min: -0, max: 10000 })),
      borderColor: "rgb(197, 35, 189)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const transactions = [
  {
    date: new Date(),
    amount: 1234,
    recipientSender: "Ahmed",
  },
];

for (let i = 0; i < 20; i++) {
  transactions.push({
    date: faker.date.between({ from: "2022-1-1", to: "2022-12-12" }),
    amount: faker.number.int({ min: -10000, max: 30000 }),
    recipientSender: faker.company.name(),
  });
}

transactions.sort((a, b) => a.date.getTime() - b.date.getTime());

export default function Home() {
  return (
    <div>
      <Line options={options} data={transData} />
      <table className="table table-striped table-hover table-dark table-responsive">
        <thead>
          <tr>
            <th scope="col" className="fs-3">
              #
            </th>
            <th scope="col" className="fs-3">
              Date
            </th>
            <th scope="col" className="fs-3">
              Amount
            </th>
            <th scope="col" className="fs-3">
              Type
            </th>
            <th scope="col" className="fs-3">
              Recipient/Sender
            </th>
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
            <td>3/1/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">
                + $1750
              </span>
            </td>
            <td>Incoming Transfer</td>
            <td>Ahmed Gomaa</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>25/1/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $3000</span>
            </td>
            <td>Outgoing Transfer</td>
            <td>Explosives CO.</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>14/2/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $1500</span>
            </td>
            <td>Outgoing Transfer</td>
            <td>ColdStone</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>23/2/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">
                + $4000
              </span>
            </td>
            <td>Incoming Transfer</td>
            <td>Amazon</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>21/3/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $3300</span>
            </td>
            <td>Credit Debt Payment</td>
            <td>----</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>1/4/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $500</span>
            </td>
            <td>Bill</td>
            <td>Egyptian Electricity Holding Company</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>24/4/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">
                + $1973
              </span>
            </td>
            <td>Incoming Transfer</td>
            <td>T&N</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>1/5/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">+ $300</span>
            </td>
            <td>Incoming Transfer</td>
            <td>Ahmed Gomaa 37-18268</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>26/5/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $2600</span>
            </td>
            <td>Bill</td>
            <td>Microsoft</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>30/6/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $50</span>
            </td>
            <td>Outgoing Transfer</td>
            <td>Egyptian Flag Seller</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>4/7/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">
                + $1500
              </span>
            </td>
            <td>Incoming Transfer</td>
            <td>TJ CO</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>11/7/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $700</span>
            </td>
            <td>Credit Debt Payment</td>
            <td>----</td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td>19/8/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">+ $900</span>
            </td>
            <td>Incoming Transfer</td>
            <td>52-11911</td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td>31/8/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">+ $420</span>
            </td>
            <td>Bill</td>
            <td>Anonymous</td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td>1/9/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $1000</span>
            </td>
            <td>Outgoing Transfer</td>
            <td>Ahmed Gomaa</td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td>10/10/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">
                + $5230
              </span>
            </td>
            <td>Incoming Transfer</td>
            <td>Mathew Hany 52-21647</td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td>31/10/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $2500</span>
            </td>
            <td>Outgoing Transfer</td>
            <td>Halloween CO</td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td>7/11/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-success">+ $690</span>
            </td>
            <td>Incoming Transfer</td>
            <td>SevenEleven</td>
          </tr>
          <tr>
            <th scope="row">19</th>
            <td>9/11/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $4000</span>
            </td>
            <td>Outgoing Transfer</td>
            <td>American Trade Center</td>
          </tr>
          <tr>
            <th scope="row">20</th>
            <td>25/7/2022</td>
            <td>
              <span className="badge rounded-pill text-bg-danger">- $880</span>
            </td>
            <td>Bill</td>
            <td>Christmas inc.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
