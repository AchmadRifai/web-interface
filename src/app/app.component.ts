import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobRestService } from './services/job-rest.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'web-interface'
  jobs = ['Iki']
  subs: Subscription | null = null

  constructor(private jobRestService: JobRestService) { }

  ngOnInit(): void {
    const vm = this
    this.subs = this.jobRestService.allJobs().subscribe({
      next(value) {
        vm.jobs = value
      }, error(err) {
        console.log(err)
      },
    })
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }
}
