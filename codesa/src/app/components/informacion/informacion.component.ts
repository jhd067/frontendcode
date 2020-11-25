import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModels } from '../../models/usuario.model';
import { ServiceService } from '../../Service/service.service';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  usuario: UsuarioModels = new UsuarioModels();
 personas: any= [];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
 /* handleClick() {
    
    console.log (this.usuario);
  }*/

getpersonas() {
    this.service.getpersonas()
      .subscribe(
        res => {
          this.personas = res;
         // console.log(res);
        },
        err => console.error(err)
      );
  }

}
