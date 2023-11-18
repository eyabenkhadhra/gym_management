import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService, private http: HttpClient) { }



  ngOnInit(): void {
    this.members = this.memberService.getMembers();
  }

  deleteMember(id: number): void {
    this.memberService.deleteMember(id);
  }
  fetchMembers() {
    this.http.get<Member[]>('http://localhost:3000/members')
      .subscribe(
        (members) => {
          this.members = members;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  
  addMember(nom: string, age: number, adresse: string) {
    const newMember: Member = {
      id: this.members.length + 1, // Générer un nouvel ID en fonction de la taille actuelle du tableau
      name: nom,
      age: age,
      address: adresse
    };
  
    this.http.post<Member>('http://localhost:3000/members', newMember)
      .subscribe(
        (member) => {
          this.members.push(member);
        },
        (error) => {
          console.error(error);
        }
      );
  }
  
}
