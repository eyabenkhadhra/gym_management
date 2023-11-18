import { Injectable } from '@angular/core';
import { Member } from 'src/app/models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private members: Member[] = [];

  constructor() { }

  getMembers(): Member[] {
    return this.members;
  }

  getMemberById(id: number): Member | undefined {
    return this.members.find(member => member.id === id);
  }

  addMember(member: Member): void {
    this.members.push(member);
  }

  updateMember(member: Member): void {
    const index = this.members.findIndex(m => m.id === member.id);
    if (index !== -1) {
      this.members[index] = member;
    }
  }

  deleteMember(id: number): void {
    const index = this.members.findIndex(member => member.id === id);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }
}
