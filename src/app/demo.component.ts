import { Component } from "@angular/core";


@Component(
    {
        selector: 'demo-comp',
        template: `<h2> Manually created component {{name}}</h2>`
        
    }
)

export class demoComponent
{
    name = "test";
}