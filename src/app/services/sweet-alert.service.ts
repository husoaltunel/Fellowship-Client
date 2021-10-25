import { Injectable } from '@angular/core';

declare let Swal: any;


@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  private toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast : any) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor() { }

  success(message: string) {
    this.toast.fire({
      icon: 'success',
      title: message,   
    })
  }
  error(message: string) {
    this.toast.fire({
      icon: 'error',
      title: message,
      
    })
  }
  warning(message: string) {
    this.toast.fire({
      icon: 'warning',
      title: message,
      
    })
  }
  info(message: string) {
    this.toast.fire({
      icon: 'info',
      title: message,      
    })
  }
  question(message: string) {
    this.toast.fire({
      icon: 'question',
      title: message,
      
    })
  }
}
