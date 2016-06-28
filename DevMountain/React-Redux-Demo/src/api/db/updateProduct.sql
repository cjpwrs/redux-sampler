update products
set title = $2, price=$3, quantity=$4
where id = $1;
