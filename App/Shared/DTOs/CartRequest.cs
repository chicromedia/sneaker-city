namespace App.Shared.DTOs;

public class CartRequest
{
    public int ProductId { get; set; }
    public int SizeId { get; set; }
    public int Quantity { get; set; }
}