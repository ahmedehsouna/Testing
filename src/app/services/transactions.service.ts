import { Injectable } from '@angular/core';

export interface Transaction {
  date: string;
  id: number;
  movement: string;
  amount: string;
  status: 'Active' | 'Error' | 'Hold';
  view_amount:boolean;
  selected:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }


}
