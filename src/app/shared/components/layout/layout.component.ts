import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from "jquery";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { ServicioGeneralService } from "../../../_services/servicio-general.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public innerWidth: any;
  isDocente: boolean = false;
  subjectGetter:Subscription;
  menus;

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.innerWidth = window.innerWidth;
    if (innerWidth <= 975) {
      document.getElementById('NavLayoutSidebar').classList.add('active');
      document.getElementById('NavLayoutNavbar').classList.add('active');
    }
  }

  constructor(private router: Router,
    private _service:ServicioGeneralService) {
    this.isDocente = window.location.pathname.includes('Docente') ? true : false;

    if(this.isDocente){
      this.subjectGetter = this._service.getSubjects().subscribe(data => {
        console.log("respuesta del login ", data);
        this.menus = data.map(function(s) {
            return {
              ruta: "/Produccion/Principal",
              nombre: s.title,
              icono: "fas fa-chalkboard-teacher fa-lg"
            };
        });
      });
    }
    //   //CONSULTAR EL SERVICIO PARA DOCENTE
    //   this.menus = [
    //     {
    //       ruta: "/Produccion/Principal",
    //       nombre: "Programación",
    //       icono: "fas fa-chalkboard-teacher fa-lg"
    //     },
    //     {
    //       ruta: "/Bodega/Principal",
    //       nombre: "Álgebra",
    //       icono: "fas fa-chalkboard-teacher fa-lg"
    //     },
    //   ];
    // }else{
    //   //CONSULTAR EL SERVICIO PARA ALUMNO
    //   this.menus = [
    //     {
    //       ruta: "/Produccion/Principal",
    //       nombre: "Base de datos",
    //       icono: "fas fa-book-reader fa-lg"
    //     },
    //     {
    //       ruta: "/Bodega/Principal",
    //       nombre: "Álgebra",
    //       icono: "fas fa-book-reader fa-lg"
    //     },
    //   ];
    // }
  }

  ngOnInit(): void {
    // console.log("rutaaaaaa ",this.router.url);
    // console.log("ruta de otra forma ", window.location.pathname);
    this.innerWidth = window.innerWidth;

    if (innerWidth <= 975) {
      document.getElementById('NavLayoutSidebar').classList.toggle('active');
      document.getElementById('NavLayoutNavbar').classList.toggle('active');
      document.getElementById('DivLayoutContenedorModulos').classList.toggle('active');
    }
  }

  ocultarSideBar() {
    document.getElementById('NavLayoutSidebar').classList.toggle('active');
    document.getElementById('NavLayoutNavbar').classList.toggle('active');
    document.getElementById('DivLayoutContenedorModulos').classList.toggle('active');
  }

  cerrarSesion(){
    this.router.navigate(['Account']);
  }

}
