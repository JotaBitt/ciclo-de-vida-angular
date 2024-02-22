import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { log } from 'console';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() emitirItemEditar = new EventEmitter();
  @Output() emitirIdDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  editarItem() {
    this.emitirItemEditar.emit(this.item);
  }

  deletarItem() {
    console.log('Querem me deletar');
    this.emitirIdDeletar.emit(this.item.id);
  }

  ngOnDestroy () {
    console.log('DELETADO com sucesso!');

  }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;

    } else {
      this.item.comprado = true;
    }
  }
}
