import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewayBlogModule as BlogBlogModule } from './blog/blog/blog.module';
import { GatewayEntryModule as BlogEntryModule } from './blog/entry/entry.module';
import { GatewayTagModule as BlogTagModule } from './blog/tag/tag.module';
import { GatewayProductModule as StoreProductModule } from './store/product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BlogBlogModule,
        BlogEntryModule,
        BlogTagModule,
        StoreProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayEntityModule {}
