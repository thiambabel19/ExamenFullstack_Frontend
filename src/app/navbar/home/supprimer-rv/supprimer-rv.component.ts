import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RvService} from "../../../services/Rv/rv.service";


@Component({
  selector: 'app-supprimer-rv',
  templateUrl: './supprimer-rv.component.html',
  styleUrls: ['./supprimer-rv.component.css']
})
export class SupprimerRvComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rvService: RvService
  ) { }

  ngOnInit(): void {
    alert("Vous venez de supprimer un rendez-vous ...");
    let id = this.route.snapshot.paramMap.get('id');
    this.rvService.deleteRv(id).subscribe((result:any) => {
      return this.router.navigate(['home/rv']);
    }, error => {
      alert("Erreur lors de la suppression de cet rv !!!");
    });
  }

}
