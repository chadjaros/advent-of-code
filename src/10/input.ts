export interface Chunk {
    start: string;
    end: string;
    value: number;
    otherValue: number;
}

const values = [
    { start: '(', end: ')', value: 3, otherValue: 1},
    { start: '<', end: '>', value: 25137, otherValue: 4 },
    { start: '{', end: '}', value: 1197, otherValue: 3 },
    { start: '[', end: ']', value: 57, otherValue: 2 },
];

export const lookup10 = new Map([
    ...values.map<[string, Chunk]>((x) => [x.start, x]),
    ...values.map<[string, Chunk]>((x) => [x.end, x])
]);

export const input10 = [
'<([<({{[<{{((<()>({}{})}<({}<>)>)}}>[<{(([()<>]<<>{}>))}<{({<>[]}<<>>)[([]<>)<{}{}>]}>>]]}}[<[{{[{{[<><>]',
'[<{{{[((({<<<[()[]]{()()}><{<><>}(<>{})>><<{<><>}{{}[]}>{(()())[[]{}]}>>{[[(<>[]){<>{}}][(()())(()[])]]',
'(((<{<[[<[{(((<><>)[{}{}]){{{}<>}[()<>]})(([<>()][<>{}]){{[]()}})}[({([][])<{}<>>}{[[]<>]{()',
'[(<{<[<<<<[[{<[]()><<>()>}[{{}<>}<()>]]<<[[]{}]>{({}())}>]((((<>())<(){}>)<{[]{}}<(){}>>)[{[[]<>]<[',
'[[{(<{<<[{(<({<>{}}<()[]>){<<>[]>{<>}}><[[()[]]]{{()<>}{()<>}}])[{[(<>())]<<[]{}>(<>[])>}<[{',
'(<<<[[<{({<<([{}{}](<><>)){{<><>}(())}>{<{(){}}{[][]}>[{[][]}([]())]}><([{{}[]}[[]{}]](<[]{}><{}<>>))((<(){',
'<<<{((<<{[([<[[]{}]([][])>{[<>()][[][]]}]<<[()[]][[]{}]>[<<><>>(<><>)]>)<({{{}<>}{{}}}{{<><',
'{[(<[{{{<[{({([]{}){{}{}}}[({}<>)])[([()[]]<[]{}>)<[{}{}]{{}()}>]}(<{{{}<>}(()[])}>{{<()<>><[]<>>}',
'[<<{({[{((({<<<><>>(()())>{{[][]}<{}()>}}[[((){})[{}()]]<[()<>]>]){{(<{}<>>[()<>]){{[][]}(()<>',
'({[([([<(<<[{<<><>>({}())}[[(){}][[][]]]]>><<(({<><>}{[][]})<{()()}[[]<>]>)[{((){}){{}[]}}(<<>()>{{}()})]><<',
'[[[{[<({{<[[[<{}{}>(()())]{(<>[])([][])}]({{(){}}})]<[<{{}[]}{()}>[{<><>}]][<((){})([][])>]',
'[(<{<{(<<<<{{[[][]]<()[]>}){{<<>{}>}}>({[(()())(<>[])]}(<{()()}[<>]>{[[]]<<>()>}))>(<[{({}{})}][{[{}()]',
'<(<<[([[((<<{<[]{}>{{}<>}}(({}())[[]{}])>(<{<>()}[()()]>>>))]{<{{<(<()<>>{{}()})([{}<>](<><>))>',
'[{[<[([[<[((([()[]]<{}{}>))<{[{}()][(){}]}([{}<>]<()<>>)>)]>[{((([{}()]{()()>)<(<><>)(()[])>)[(([]()',
'{[{[{<<([({<<[{}()]<()<>>>{[[][]]({}())}>}[[<{{}<>}{<>}>]])(<<{[()[]]}(((){})({}{}))>[({{}()})]>)](',
'({{{<<<<(([([[<><>]<<>[]>]{<()<>><()[]>})<([<>{}])>])(<<{{()}<()[]>}<([]<>)>>{{[{}()][[]<>]}[{<>}{()()',
'[{(([{<{{(<{<<[]()>{{}<>}>}[<({}[])<{}<>>><{<>()}>]>)}<{{{{<<>{}>{()()}}}[[{()()}(()<>)><<{}<>>>]}[[(<(){}>(',
'[[{<[<(<[[<<({{}()}{{}})(({}{})[[]{}])>[([<>{}]({}<>))])]{<[<[[][]]<()<>>>]{([()()]{<><>})<{[]{}}[[]()]>}><',
'([<<{({[({[({<{}[]>{{}<>}}){<[<>[]]>[(()())]}]{{{{{}[]>{()<>}}}<[{{}<>}<[]()>]([<>]<<><>>)>}})',
'(([<[[{{(<[{{(()<>)}<<{}()>{<>{}}>}<[<[]()>[()()]]([<>()]{()})>)[(<[<><>]{{}<>}>{{{}()}{[]()}})<',
'[([[[([[[<[{{<()()>{[][]}}(<[][]>)}[{<{}()>{<>[]}}]]>({[[{<><>}<[][]>]([()]{()[]})]}{([<<><>>[{}(',
'(<({<[[[[(((({[]{}}<{}<>>)[<(){}>[()<>]])){<(<<>{}>)<<()<>><()[]>>>{[[()()]<[][]>][{{}()}<<>{',
'{{{{[[<{<{(<(([]())[{}[]])<(()<>){{}{}}}>){{{<{}[]><{}<>>}{(()[])[<><>]}}<{{()()}<<>[]>}>}}><(<[(<{',
'<<[(<<<([{<{(({}())[{}[]])(<(){}>(<><>))}>([[(<>[])(<>[])]<({}{})<{}>>](((<>())<{}[]>)[[<>',
'<{{((([[<{[(({<>{}}({}())))[([[]()][{}{}])]]}(([<([][])<<>()>>]<{{<>[]}(()())}[({}())[()()]]>)',
'(({[{[[[[(<<[[(){}][(){}]]<{()<>}<[][])>>{({[][]}{<>{}}){<[][]>}}><{(([]{}){{}<>}){[()<>][(',
'{<[[<<([<{<<{[<>{}}{<><>}}(({}()))>[[{[]()}](<<>>{<><>})]><<([<>{}]{[][]})[<{}[]>{<><>}]>>}{[{(<<>()><{}<>',
'({{{((({<<({<[<>()](()[])]}){((<{}()>{[]<>}){<[]{}>[[][]]})<[[[]{}](())](<{}<>>[{}])>}>[{{[(<>[])]}[<({}{',
'{<(<[{({[[[{[[{}<>][(){}]]{{(){}}}}<<[[]()]{<>}><[{}[]]>>]{<<((){})[{}]>({<><>}{()[]})><<[{}()]{',
'[[[(({<((<({<<{}>>}<[([]{})[[]]]>)<<{[()[]](<><>)}><<{[]{}}[[]]>{{()[]}{[]()}}>>><[((<(){}',
'{{<{{{<<{<{<((<>[])<()[]>)<(<>{}){[][]}>><(({}<>){[][]}){[()<>]{<>{}}}>}>[((<<(){})({}())><([]',
'[[[{({<[{[[<<(()<>)({}())>({<><>}[<><>])>]]<(<{<()<>>([]())}{[[]<>]{<>()}}>{<([][])((){})>([{}][()<>])})>}]<(',
'<<{[{[[<([[<<[{}<>]>[({}())<()[]>]>[{<(){}><{}<>>}[<<>>({}{})]]]<<{<()[]><()()>}({{}()}[{}<>])>>]<<([([](',
'{<<<(<{{[{{{<<{}[]>{()()}>{[<>[]]({}())}}}<[<([]())>{<()()>(()())}][<(()())<{}<>>>((<><>)[[][]]]]>',
'[[[({<(([[(<({()<>}<[]<>>)>[({[]}{<><>})<<(){}>{<><>}>])]]<(<[<<()()]<{}()>>(<{}()>([][]))]<<{<><>}>>>){',
'<<[[<({<({[<{(()[])}{{[]()}<[]{}>}>]<[(<[]{}><<>{}>)<[()[]]([]{})>]>})>((<([<[<><>]([]{}}><{<>()}<()[]>>]{',
'({[[[{{([[((<<{}<>}[{}<>]>)(({{}<>}<()()>)[[[]<>]<()<>>]))<(<{[][]}>)<{{[]<>}<[]<>>}[(<><>){(){}}]>>][<',
'{<[[[[[<[[{{{{()}[[][]]}[<(){}>[[][]]]}(<[{}{}]>)}(<<<()()>{<>}>>)]<([[[()<>]((){})]([[]()]<{}{}>)]([{{}(',
'[<(({(((<[(<<[[]{}][<><>]>[{(){}}[[]]]><{{()[]}<<>()>}{{()}{(){}}}>)(<[([]())]<{{}{}}(())>>)]([([{()[]}[[',
'(({[([{{((({{<<>[]>}}<([{}[]][[]()])[{{}[]}<<>{}>]>)<({([])<[]{}>}){(((){})[<>[]]){<<>[]>[{}()',
'<{<{(<<({([([([]())(<>[])][{()<>}{<>{}}])](({<()()>{()<>}}{{[]}[[][]]})[[[{}{}][()[]]]])]}(({[[{<>()}[{}()]',
'[[{[{{[({<{<(<{}<>>)[[{}{}>[<><>]]>[((())([]<>)){([]())<<><>>}]}>{{{<{<>[]}({}{})>{([]{}){[][]}}}[{{<>',
'[[{[<([{([<<<(<><>){[]{}}>{{[][]}([]<>)}>><{<<<>()>{<><>}>[<[][]>([]())]}({[{}[]]{<>()}}({()()}(()<>)))>])}])',
'{{<((([<[({{(([]){[][]})[(()<>)<()()>]}{{{()[]}}([()[]][{}{}])}})<{({[()[]]<[]{}>}[<()()><()[]>])',
'([<<<([{{<({{[{}<>][<>()]}{([]<>){(){}}}}){({<{}()>}[(()){<><>}])}><{<(<()[]>({}{}))(({}{})',
'{{[([<[{<<{<{[{}[]][(){}]}[[[]()]{()[]}]>}><[(([<>{}]){{<>()}{()<>}}){[{<>{}}[[]<>]]{<[]<>>}}][[[{[]<',
'{<<<<{(((<{([{{}{}}][[[]()]<<>()>])<([()<>]([]))[[<><>][{}()]]>}{<{{(){}}<()<>>}<{<>{}}{<>()}>>(<{',
'<[({<{{{<((<<({})([]<>)>((<>[]){[]()}}>)(<[<(){}>({}[])]>[<({}<>){[][]}>[{()<>}<<><>>]]))>[({[([<>{}][{}()])<',
'(({[[{<{[[((<[<>()]><{()<>}[[]<>]>)([{[]()}[[]()]](({}{}){<>()})>){<{(()())(<>[])}[<()[]>[()()]',
'[(([{{<{<[{{{[{}{}]<(){}>}[<[]{}>({}())]}({[()[]]{[]()}}[<{}[]>(<>)])}[{{<[]{}>(()<>)}<[[]()]<<>[]>)}<<<<>()',
'<(<<{<([([(<[{{}<>}<()()>][{()[]}(<><>)]>{{<[]<>><{}[]>>{{{}}{[]<>}}})({[<[]{}>[[][]]]}{{<',
'((<<<([[<<{([<<>{}>{<>()}])<<{[]{}}[()[]]>>}[<{([]())[<>{}]}>{((()[]){{}<>))[<()<>>([]<>)]}]>{(({[[]]',
'{<<((({({[<[[[<><>][<>{}]]{({}<>)<()[]>}][<<[]{}}<[]()>>[[[]<>]]]>([[[{}{}]]<<<><>><<>{}>>',
'[{<([{{<{(<{{{(){}}{{}[]}}(<<>()>[()[]])}{{{{}}(()())}{[()<>]}}>[{[{[][]}{{}<>)]}((((){}){[]{}})(({})<<>{}',
'[{[(<[{<{{[<{{()()}{()[]}}<<()()><{}[]>>>][<({()()}[()[]]){([][])[<>{}]}>(((()()))((<>{})<{}{',
'(<(<([<<<{[<({<>}{()()})><((<>))<<{}[]><<><>>>>]{<{[[][]]}{{[]{}}{[]<>}>>[[[[]()]({})]]}}><<<<',
'<([<(<<<(({{<[<><>]<[]<>>>(<[]()>[{}<>])}[<(()()){{}<>}>]}))<<[{{[<>[]]<()[]>}{(()<>){()()',
'<[(<{{[[[<(([[<>()]([][])])){{{[()()]{{}[]}}[([]{}){(){}}]}{[<[]>{[]()}][[<>]({}())]}}>]]<(<[{<{<>()}{()[',
'<{{{[(<{<[<{{<()>(<>{})}[({}()){()()}]]([{<>{}}[()()]](<[]<>><<>{}>))>[<{<[]()>(<>)}<{[]{}}[(',
'<{(<[<[<{<({<[<><>}[[]()]>}([<(){}><<><>>][<()()><<><>>]))([[([]())<{}>]<[()()]{<>{}}>]{(({}',
'<(<({(<[<[(((<<>{}>{{}()})){{[[]()](())}{{<><>}<<><>>}})([<<()()><[]())>[[<>()]<<>[]>]][<{()()}',
'((<[{{(<[([<([()()](<>{}))(<{}()>[{}{}])>({<{}{}>(<>[])})])]>)}<({((([(<[]{}>({}[]))]{((<><>)(()()))}))(({{<{',
'{({[<<[(<<((<<{}[]>[()<>]>{<<>[]>{[]()}}){[<<><>>[()[]]]<<{}()>[()<>]>})[{[{{}<>}{()}]}<(<()[]><{}{}>)[[',
'{{[<((<((<{[([[][]]<{}<>>)((()[]))]}>{[{(({}())[()[]]){{[][]}([][])}}](<<[<><>]{<>}><<{}<>><[][]>>>',
'[[[<(<{{([{(<(<>{})(()<>)><(<>[])[{}()]>)([[[]()][[]<>]])}[[{<[]()>(<><>)}[(()){<>()}]]({{[]()}})]])[[',
'<({([{(<{{[<<[(){}][[]()>>[[{}{}](()[])]>]{{[[{}<>]{{}<>}]{({}<>)[{}{}]}}[({()()}[{}<>]){((){})}]}}{{[[{{',
'[[[[{<[<(([<[<[]{}><<>{}>]<<[]<>>(()[])>>([(<>)<{}()>])])<{{({[]{}}{[]()})}<[[<><>]{[]<>}]{<<>()><<>()>}>',
'<<<[([[(({(<[<{}>[{}()]]{{()}(()[]}}>(<<<>()>(<>[])>))<<[{<>()}{<>[]}][{[]{}}<{}[]>]>>}){<<<(<<>',
'{{<[{{({{(([[([]{})<{}()>]]))){(<{{<<>[]>(<>[])}<<()><[]<>>>}>([([<>()]<{}[]>)(({}{}))]<<([]())[<>',
'([<[({[{{[[[({<>{}}<(){}>)({<>[]}{()<>})](([(){}]{[]()}))]<[<(<>[])({}<>)>][[[[]{}]<()>]<<<>[]>{[]<>}>]>]',
'{[{[[{<(<<({{([]<>)([]{})}<<{}<>><<>[]>>}(({()()}[{}()]){(<><>)[<>[]]]))<<[([])(<>[])]{([]())(',
'({<<{{[<<[{{<[(){}][[]]><{[]()}<[]{}>>}[<<<>()>{{}()}>[<{}<>>[<><>]]]}](<<[(<>{})[()]}{<<>><[]',
'<<<([{[([{{[{[[]<>][<>[]]}]}{<([[][]]){[<>[]]<{}()>}><(<[]<>>(<>{}))[<[][]>{<>}]>}}{<{{[<>{}]{()',
'<((<([([<{<[([{}<>](<>()))<([]<>)([]<>)>][<{()<>}{[]<>}>]>}<{[(<[]()>(<><>))[<(){}>[[][]]]](<([]())<<>[]>>[',
'{[<[<<{{(<{[{((){})<{}[]>}[([][])]]}{[({()<>}){[{}<>](<>{}))]}>)}<[[(<(<()<>>){(()())([]{})}>({[{}[]]',
'<([[<({{[<({[({}{}){{}()}]<((){})[<><>]>})([[{[][]}<()<>>]<[()<>][{}{}]>])>]}}){{[(({(({[]()}{()()}',
'<({([<[{(<[{(({}[]))}[[{[]<>}{{}[]}](({}[]))]]<[[(()[])[()()]]{[{}()>}]>>{<<{[[]<>](()())}[<{}[]>(<>',
'(([[<(<<[{<(<[{}{}]{()<>}>)((<(){}>([]))({<>{}}[<>[]]))>(<<{()[]}{(){}}>[[<>()]]>[<{()[]}<()[]>>{({}<>){[]<',
'{<[<<{(<{{<[{[{}()][<><>]}][{({}{})(<>[]))]>{<[[<><>]]<<<>()>({}[])>>({<[]<>>([]<>)}{[(){}]([]{})})',
'{{<((([<{(([{[<>{}]{{}<>}}])<<<{<>[]}{(){}}>{(()[])[()[]]}>{{<<>()>}([(){}]{{}<>})}>)}{(([{{{}[]}(<>())',
'{[(<{{{<[[{{[[()[]](<>{})]((()<>)({}[]))}}]][{([[{{}[]}<[]<>>]][{(<>{})}[(<>()){<><>}]])}>>[([',
'<<<{([((<<{(({{}{}}({}{})))}{(<(<><>)[[]<>]>{[{}[]](<>)})<{{<>()}{{}<>}}<<<>[]><<>()>>>}>>))]){',
'<{(<[[(({<[{{<<><>><{}<>>}<<<>{}>{()()}>}]>}))[((([([{[]{}}]([{}()][<><>]))(((<>())(<>]))][',
'([<<[({(({{((<[]{}>{()[]}})({[<><>][<>()]}(<<><>>[[]()]))}{{{(()<>)({}{})}(<{}()><[]()>)}{{{<><>}',
'[<<<{{<<{<{<<[()()](<><>)>>([({}){{}[]}]{<[]()>{{}()}})}<[{([]())<{}<>>}([{}()]<{}[]>)]<(<[]',
'{{<[({({<{({((()<>)){[[]()]<(){}>>}<[[{}]{<><>}]<(()<>)<()()>>>)}(({((<><>)[{}[]]){[[]()][()[]]}})<({',
'<[{<({<({(({{<(){}>[[]{}]}<<[][]><{}{}>>})[(([{}()][<>()]))[(<<>{}>([][]}){[[]{}]}]])[<[{(()<>)[{}<>]}]>]',
'([(([{<(<{[<{([][]){[][]}}(<<>><[]{}>)>({[<>()]{{}<>}}(<<>[]>{<>{}}))][({{[]()}{[]}}(([]{})(()<>))',
'<{<<<({[[(<<{(()<>)[[]{}]}<<()()>>>><[({()[]}[[][]]){<[][]>(<><>)}][(({}{})<()[]>){{{}()}<[]{}>}]>)[<((([]{}',
'<([[([<<<{<<<<<><>>({}())>{{[]()}[{}[]]>>[<[<>()]({}{})>]>(({<{}{}>{<>{}}}{<{}[]>{{}()}}){[<[]()>{()<>}',
'[{{<{[{{{<{{<([][])[()<>]>{{[]{}}({}())}}((<<>[]>([][])))}><{<<<{}<>><<>()>>{(()<>){[]{}}}>}{([{[][]}{<>{}}])',
'[({<((({(<{[{<[][]}(<>[])}<<{}<>>{{}<>}>]({{<>()}[{}{}]})}(<{{{}()}<<>[]>}[([]{})<[][]>]>[{(<>',
'<([[[<{{<<<[(((){})(()()))([<><>]{()})]<<[<>]([])>(([]<>))>>{{[<()>]<(()[])([][])>}[({{}}<{}{',
'{<<((<[{<{<[{[[][]]{<><>}}{<(){}>{<><>}}]<((<>{})<<>[]>)>>((((<>[]){[]()})({<>()}))([[{}[]]{<>[]}]<',
'(<{(<[[([[([<({}{})[()<>]>])][<{<({}())><{()()}>}>{[{[{}<>]([])}](([()()]))}]])]]>)}>[[({{',
'(<[[[{<{[<([{({}{}){{}()}}[(<>{})<()()>]][{{{}()}}<{<>[]}[()<>]>]){{((<><>){()<>])<<<>()>[{}[',
'<{<<[((<<<{([{{}<>}({})]{((){})[[]<>]})<[[()<>]([]())](<[]<>>({}<>))>}{(<{()[]}>{<[]<>>})<',
'{[([<[<[({{[<[<>()][{}[]}>((<>())<[]<>>)]{(<{}<>>(()()))([()()])}}}<(<(<<>{}>{<>{}})><({[]{}}[',
'{{[[[<<<<[[{({[]<>}<()()>)<<(){}>{<><>}>}{[([]<>)[<>[]]]}]{<[{()()}(<><>)]{{<>{}}<[]{}>}>((<{}()>{(){}}))}>>>',
'({[<[[<{<([<<<()<>}<{}{}>>(<<>[]>(<>()))><{[<>()]({}<>)}<{[]{}}>>])>}{{{<{({[]{}}<<>>)<<[]<>',
'([((((<(<[({((<>())<()<>>)}([<{}()>{<>()}]{{{}()}{[]<>)}))([<(<>{})><[(){}][<>()]>](([()]<[]{}>)(<{}{}>{()',
'{[(<{({(<([(<[{}()][{}()]>)[[[{}()](()())]<{[][]}<[]<>>>]][({[()()]{{}{}}}((<><>)(<>())))<<{()()}{[]{}}}[{[]',
'<([[{<<{<<{(([()<>]{<>[]})<<[][]>({}[])>)({<{}{}>([]<>)})}{<{{[][]}{[]{}}}[((){})((){})]><([[][]]){{()()}}>}',
'(([<[[[(({{[[[[][]](<>())]{<<>><<>()>}]<<(()<>)>[<<>{}>{<><>}]>}[<(<<><>><{}{}>)[<()<>><[]()>]>[{<()[]>[<',
'{[{{{[(<<[<[{[()()]<{}<>>}[([]<>)({}<>)]][<{()()}[<>[]]>]>]>>)]{([({[{({<>}(<>{}))[({}())[[][]]]}<{{()[]',
'(<(<{<{<[[(({[<>[]]<{}[]>}[([]{})(()[])]))({([[]])([()()]{()[]})}<[<<><>><[]<>>]>)]]<([{{{{}<>}(<>)}}<({',
'[<[{[<<[<<[<{<<>[]}<()>}{(()[])[{}[]]}><[<(){}>{{}[]}]>]>(((<{{}<>}{()[]}><<<>{}>{()[]}>)[[(',
'[<{(<[<{{([{{<<>{}><[]()>}({(){}}[[]{}])}{[<[][]>[<><>]][<<><>>[{}{}]]}](<<{(){}}({}<>)>(<()[]>[()[]])>',
'<[{<({((([(<([[]<>]<()[]>)<(<>())>>(<{[][]>(<>{})>[{(){}}]))])))}<<{({<<<([]{})([]())>[{()()}<()<>>]',
'<[(<{((({<<{{[{}<>]}[[<>{}]({}[])]}{(<{}[]}{<>})<{[]()}[()[]]>}>>}))(<<[<<(<<>{}><<>{}>)<<',
];

export const input10mini = [
'[({(<(())[]>[[{[]{<()<>>',
'[(()[<>])]({[<{<<[]>>(',
'{([(<{}[<>[]}>{[]{[(<()>',
'(((({<>}<{<{<>}{[]{[]{}',
'[[<[([]))<([[{}[[()]]]',
'[{[{({}]{}}([{[{{{}}([]',
'{<[[]]>}<{[{[{[]{()[[[]',
'[<(<(<(<{}))><([]([]()',
'<{([([[(<>()){}]>(<<{{',
'<{([{{}}[<[[[<>{}]]]>[]]',
];