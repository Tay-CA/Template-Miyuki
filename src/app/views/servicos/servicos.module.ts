import { NgModule } from '@angular/core';
import { ServicosComponent } from './servicos.component';
import { Aplicativos } from './aplicativos.servicos/aplicativos.servicos.component';
import { ArteDigital } from './arte-digital.servicos/arte-digital.servicos.component';
import { ArteImpressa } from './arte-impressa.servicos/arte-impressa.servicos.component';
import { IdentidadeVisual } from './identidade-visual.servicos/identidade-visual.servicos.component';
import { Ilustracoes } from './ilustracoes.servicos/ilustracoes.servicos.component';
import { SocialMedia } from './social-media.servicos/social-media.servicos.component';
import { WebDesign } from './web-design.servicos/web-design.servicos.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ServicosComponent,
        Aplicativos,
        ArteDigital,
        ArteImpressa,
        IdentidadeVisual,
        Ilustracoes,
        SocialMedia,
        WebDesign
    ],
    imports: [
        RouterModule.forChild([
            { path: "", component: ServicosComponent },
            { path: "aplicativos", component: Aplicativos },
            { path: "artedigital", component: ArteDigital },
            { path: "arteimpressa", component: ArteImpressa },
            { path: "identidadevisual", component: IdentidadeVisual },
            { path: "ilustracoes", component: Ilustracoes },
            { path: "socialmedia", component: SocialMedia },
            { path: "webdesign", component: WebDesign }
        ])
    ]
})
export class ServicosModule { }
