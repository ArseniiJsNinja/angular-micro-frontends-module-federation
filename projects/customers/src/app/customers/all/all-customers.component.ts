import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html'
})
export class AllCustomersComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr
  ) {}

  async addLazyComponent() {
    const comp = await import('../lazy/lazy.component').then(
      m => m.LazyComponent
    );

    const factory = this.cfr.resolveComponentFactory(comp);
    this.viewContainer.createComponent(factory, null, this.injector);
  }
}
