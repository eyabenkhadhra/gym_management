import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  member: Member = {
    id: 0,
    name: '',
    age: 0,
    address: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const existingMember = this.memberService.getMemberById(id);
      if (existingMember) {
        this.member = { ...existingMember };
      }
    }
  }

  saveMember(): void {
    if (this.member.id) {
      this.memberService.updateMember(this.member);
    } else {
      this.member.id = this.generateUniqueId(); // Generate a unique ID according to your logic
      this.memberService.addMember(this.member);
    }
    this.router.navigate(['/members']);
  }

  private generateUniqueId(): number {
    // Logic to generate a unique ID
    return 0; // Replace with your actual logic
  }
}

