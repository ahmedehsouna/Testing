import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../services/transactions.service';
declare let $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  selected_transaction: Transaction = null;

  remove_transaction() {
    this.transactions = this.transactions.filter(
      (one: Transaction) => one != this.selected_transaction
    );

    this.filtered_transactions = this.filtered_transactions.filter(
      (one: Transaction) => one != this.selected_transaction
    );

    $('#deleteModal').modal('hide');
  }

  edit_transaction({ value }) {
    Object.keys(value).forEach((key) => {
      this.selected_transaction[key] = value[key];
    });
    $('#editModal').modal('hide');
  }

  transactions: Array<Transaction> = [
    {
      date: '2022-01-14',
      id: 1480636587,
      movement: 'Money Transfer',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-15',
      id: 1480636588,
      movement: 'Airtime',
      amount: '1,500.000 UGX',
      status: 'Error',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-17',
      id: 1480636589,
      movement: 'Money Transfer',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-18',
      id: 1480636590,
      movement: 'Collection',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-19',
      id: 1480636587,
      movement: 'Money Transfer',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-20',
      id: 1480636587,
      movement: 'Money Transfer',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-21',
      id: 1480636587,
      movement: 'Money Transfer',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-24',
      id: 1480636587,
      movement: 'Money Transfer',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-25',
      id: 1480636587,
      movement: 'Money Transfer',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
    {
      date: '2022-01-26',
      id: 1480636587,
      movement: 'Money Transfer',
      amount: '1,500.000 UGX',
      status: 'Active',
      view_amount: false,
      selected: false,
    },
  ];

  filtered_transactions: Array<Transaction> = this.transactions.slice();

  select_all() {
    this.filtered_transactions.forEach((transaction) => {
      transaction.selected = true;
    });
  }

  ngOnInit(): void {}

  filter(type = '', value = '') {
    if (type == 'date') {
      if (value.includes('to')) {
        let splitted = value.split(' to ');
        this.filtered_transactions = this.transactions.filter((transaction) => {
          let date = new Date(transaction.date).getTime();
          console.log(
            date,
            new Date(splitted[0]).getTime(),
            new Date(splitted[1]).getTime()
          );
          return (
            date >= new Date(splitted[0]).getTime() &&
            date <= new Date(splitted[1]).getTime()
          );
        });
      } else {
        this.filtered_transactions = this.transactions;
      }
    } else if (type == 'id') {
      this.filtered_transactions = this.transactions.filter((transaction) =>
        `${transaction.id}`.includes(value)
      );
    }
  }

  toggle_picker() {
    setTimeout(() => {
      $('#modal_picker').flatpickr({
        dateFormat: 'Y-m-d',
        allowInput: true,
        position: 'auto center',
      });
    }, 100);
  }

  ngAfterViewInit() {
    $('#picker').flatpickr({
      mode: 'range',
      dateFormat: 'Y-m-d',
      allowInput: true,
      position: 'auto center',
    });
  }
}
