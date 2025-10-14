import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-dashboard',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.css'
})
export class CustomerDashboard {
activeTab: 'book' | 'view' | 'profile' = 'book';


booking = {
checkin: '',
checkout: '',
roomType: 'standard',
guests: 1,
};


bookedRooms: any[] = [];


profile = {
name: 'John Doe',
email: 'john@example.com',
rating: 4
};


setTab(tab: 'book' | 'view' | 'profile') {
this.activeTab = tab;
}


bookRoom() {
this.bookedRooms.push({ ...this.booking });
alert('Room booked successfully!');
}


updateProfile() {
alert('Profile updated successfully!');
}


rate(star: number) {
this.profile.rating = star;
}

}
