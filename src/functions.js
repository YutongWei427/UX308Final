function color_mix(rgb_colour1, rgb_colour2){
    if((rgb_colour1=='red'&&rgb_colour2=='blue')||(rgb_colour1=='blue'&&rgb_colour2=='red')){
        return 'fuchsia'
    }else if((rgb_colour1=='red'&&rgb_colour2=='green')||(rgb_colour1=='green'&&rgb_colour2=='red')){
        return 'yellow'
    }else if((rgb_colour1=='green'&&rgb_colour2=='blue')||(rgb_colour1=='blue'&&rgb_colour2=='green')){
        return 'aqua'
    }else if(rgb_colour1=='red'&&rgb_colour2=='red'){
         return 'red'
    }else if(rgb_colour1=='blue'&&rgb_colour2=='blue'){
        return 'blue'
    }else if(rgb_colour1=='green'&&rgb_colour2=='green'){
        return 'green'
    }else {
        return 'ERROR'

    }
}

function largest_product(val1, val2, val3){
    let array = [val1,val2,val3].sort((x, y) => x - y)
    return array[1]*array[2]
}

function day_of_the_week(day_num){
    if(day_num==1){
        return "Sunday"
    }else if(day_num==2){
        return "Monday"
    }else if(day_num==3){
        return "Tuesday"
    }else if(day_num==4){
        return "Wednesday"
    }else if(day_num==5){
        return "Thursday"
    }else if(day_num==6){
        return "Friday"
    }else if(day_num==7){
        return "Saturday"
    }

}

function pay_raise(status, years, salary){
    let percent=0.02
    if(status=='F'){
        if(years>=10){
            percent=0.05
    }else if(years<4){
            percent=0.015
    }
    }else if(status=='P'){
        if(years>=10){
            percent=0.03
    }else if(years<4){
            percent=0.01
        }
    }
    return salary*(1+percent).toFixed(2)
}

function is_leap(year){
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)).toString();
}

export {color_mix,largest_product,day_of_the_week,pay_raise,is_leap}