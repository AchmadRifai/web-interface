import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements AfterViewInit {
  @Input() jobName = ''
  closeResult = ''
  logs = ['']
  @ViewChild('scroll', { static: false }) scrollFrame: ElementRef | any
  @ViewChild('item') itemElements: QueryList<any> | null = null
  subs: Subscription | undefined | null = null
  scrollContainer: any

  constructor(private modalService: NgbModal) { }

  ngAfterViewInit(): void {
    this.scrollContainer = this.scrollFrame?.nativeElement
    this.subs = this.itemElements?.changes.subscribe(_ => this.scrollToBottom())
  }

  open(content: any) {
    const modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
    let ws: WebSocket | null = null
    const subs = modal.shown.subscribe(_ => {
      ws = new WebSocket('ws://localhost:8080/job/' + this.jobName)
      ws.onmessage = msg => {
        this.logs = `${msg.data}`.split('\n')
      }
    })
    modal.result.then(result => {
      this.closeResult = `Closed with ${result}`
      subs.unsubscribe()
      ws?.close()
      this.subs?.unsubscribe()
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
      subs.unsubscribe()
      ws?.close()
      this.subs?.unsubscribe()
    })
  }

  private scrollToBottom() {
    this.scrollContainer.scroll({
      behaviour: 'smooth',
      left: 0,
      top: this.scrollContainer.scrollHeight
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
