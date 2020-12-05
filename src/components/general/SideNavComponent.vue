<template>
  <ul id="options">
    <a href="/sales/add">
      <b>Add Sales</b>
      <i class="far fa-calendar-plus"></i>
    </a>
    <a href="/sales/">
      <b>Sales</b>
      <img src="@/assets/images/salesDesign.svg" alt="Sales" />
    </a>
    <router-link to="/warehouse">
      <a>
        Warehouses
        <img src="@/assets/images/inventoryDesign.svg" alt="Warehouses" />
      </a>
    </router-link>

    <a href="/expenses">
      <b>Expenses</b>
      <img src="@/assets/images/ExpensesDesign.svg" alt="Expenses" />
    </a>
    <a href="/company/analytics">
      <b>Analytics</b>
      <img src="@/assets/images/analyticsDesign.svg" alt="Analyitcs" />
    </a>
    <a href="/reports">
      <b>Reports</b>
      <img src="@/assets/images/reportsDesign.svg" alt="Reports" />
    </a>
    <a href="/customers">
      <b>Customers</b>
      <img src="@/assets/images/supplier.png" alt="Employess" />
    </a>
    <a href="/employees">
      <b>Employees</b>
      <img src="@/assets/images/employmentDesign.svg" alt="Employess" />
    </a>
    <a href="/suppliers">
      <b>Suppliers</b>
      <img src="@/assets/images/supplier.png" alt="Employess" />
    </a>
    <a href="/logout">
      <b>logout</b>
    </a>

  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideNavComponent",
  data() {
    return {};
  },

  computed: { ...mapState(["isAuth"]) },
  methods: {},
  created() {
    // this.message = res.data.message;
  }
};
</script>


<style scoped>
</style>