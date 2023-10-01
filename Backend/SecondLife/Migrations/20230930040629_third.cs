using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SecondLife.Migrations
{
    /// <inheritdoc />
    public partial class third : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrderGivenById",
                table: "tbl_order",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OrderToAdId",
                table: "tbl_order",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BiddingLimit",
                table: "tbl_ads",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_tbl_order_OrderGivenById",
                table: "tbl_order",
                column: "OrderGivenById");

            migrationBuilder.CreateIndex(
                name: "IX_tbl_order_OrderToAdId",
                table: "tbl_order",
                column: "OrderToAdId");

            migrationBuilder.AddForeignKey(
                name: "FK_tbl_order_tbl_ads_OrderToAdId",
                table: "tbl_order",
                column: "OrderToAdId",
                principalTable: "tbl_ads",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tbl_order_tbl_user_details_OrderGivenById",
                table: "tbl_order",
                column: "OrderGivenById",
                principalTable: "tbl_user_details",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tbl_order_tbl_ads_OrderToAdId",
                table: "tbl_order");

            migrationBuilder.DropForeignKey(
                name: "FK_tbl_order_tbl_user_details_OrderGivenById",
                table: "tbl_order");

            migrationBuilder.DropIndex(
                name: "IX_tbl_order_OrderGivenById",
                table: "tbl_order");

            migrationBuilder.DropIndex(
                name: "IX_tbl_order_OrderToAdId",
                table: "tbl_order");

            migrationBuilder.DropColumn(
                name: "OrderGivenById",
                table: "tbl_order");

            migrationBuilder.DropColumn(
                name: "OrderToAdId",
                table: "tbl_order");

            migrationBuilder.DropColumn(
                name: "BiddingLimit",
                table: "tbl_ads");
        }
    }
}
