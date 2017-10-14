import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

let stateIndex: number = 1;

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@Input()
	name:string;

	log(msg: string) {
		console.log(`${stateIndex++} ${msg}`);
	}

  constructor() {
  	// 在这里name这个输入属性还没有被赋值，所以如果初始化需要用到这些数据，则应该将逻辑写在ngOnInit()里而不是这里
  	this.log(`name属性在constructor中的值：${name}`);
  }

  ngOnChanges(changes: SimpleChanges):void {
  	// 这个方法是在父组件往这个子组件传值的时候调用，输入属性的值发生变化的时候会重复调用，如果这个子组件没有输入属性，则不会调用
  	let name = changes['name'].currentValue;
  	this.log(`name属性在OnChanges中的值：${name}`)
  }

  ngOnInit() {
  	this.log('OnInit');
  }

  ngDoCheck() {
  	this.log('DoCheck');
  }

  ngAfterContentInit() {
  	this.log('AfterContentInit');
  }

  ngAfterContentChecked() {
  	this.log('AfterContentChecked');
  }

  ngAfterViewInit() {
  	this.log('AfterViewInit');
  }

  ngAfterViewChecked() {
  	this.log('AfterViewChecked');
  }

  ngOnDestroy() {
  	this.log('OnDestroy');
  }

}
