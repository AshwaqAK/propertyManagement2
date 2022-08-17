import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../services/property.service';
declare var $: any;
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  propertyForm!: FormGroup;
  submitted = false;
  properties: any = [];
  selectedProperty: any = [];
  id: number = 0;
  constructor(private formBuilder: FormBuilder, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      size: ['', Validators.required]
    });
    this.getProperty();
  }

  get name() {
    return this.propertyForm.get('name')!;
  }

  get description() {
    return this.propertyForm.get('description')!;
  }

  get size() {
    return this.propertyForm.get('size')!;
  }

  // save the property
  saveProperty() {
    if (this.propertyForm.invalid) {
      for (const control of Object.keys(this.propertyForm.controls)) {
        this.propertyForm.controls[control].markAsTouched();
      }
      return;
    }
    if (this.propertyForm.valid) {
      this.propertyService.createProperty(this.propertyForm.value).subscribe((res: any) => {
        console.log(res);

      })
      this.id = ++this.id
      this.propertyForm.patchValue({ id: this.id })
      this.properties.push(this.propertyForm.value);
      ($('#property') as any).modal('hide');
      this.propertyForm.reset()
    }
  }

  // get property
  getProperty() {
    this.propertyService.getProperty().subscribe((res: any) => this.properties = res.property)
  }

  // delete the property
  deleteProperty(event: any, id: number) {
    if (event.target.checked && !this.selectedProperty.includes(id)) this.selectedProperty.push(id);
    if (!event.target.checked) {
      let index = this.selectedProperty.indexOf(id);
      this.selectedProperty.splice(index, 1)
    }
  }

  // confirm delete
  confirmDelete() {
    this.propertyService.deleteProperty(this.selectedProperty).subscribe((res: any) => {
      this.properties = this.properties.filter((x: any) => this.selectedProperty.indexOf(x._id) == -1);
      ($('#delete') as any).modal('hide');
    })
  }

}
