import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MsitmApplicationSharedModule } from 'app/shared/shared.module';
import { RegionComponent } from './region.component';
import { RegionDetailComponent } from './region-detail.component';
import { RegionUpdateComponent } from './region-update.component';
import { RegionDeleteDialogComponent } from './region-delete-dialog.component';
import { regionRoute } from './region.route';

@NgModule({
  imports: [MsitmApplicationSharedModule, RouterModule.forChild(regionRoute)],
  declarations: [RegionComponent, RegionDetailComponent, RegionUpdateComponent, RegionDeleteDialogComponent],
  entryComponents: [RegionDeleteDialogComponent]
})
export class MsitmApplicationRegionModule {}
