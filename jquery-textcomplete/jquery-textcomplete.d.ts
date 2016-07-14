// Type definitions for jquery-textcomplete 1.6.2
// Project: https://github.com/yuku-t/jquery-textcomplete
// Definitions by: Pierre Urban <https://github.com/purban/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface IJqueryTextcomplete {
    (strategies: any, option?: any): any;
}

declare var JqueryTextcomplete: IJqueryTextcomplete;

declare module "jquery-textcomplete" {
    export = JqueryTextcomplete;
}

interface JQuery {
    textcomplete(strategies: any): JQuery;
    textcomplete(strategies: any, option: any): JQuery;
}
